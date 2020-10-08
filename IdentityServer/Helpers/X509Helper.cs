using System;
using System.Net;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;

namespace IdentityServer
{


    namespace X509Helper
    {
        public static class X509
        {
            public static X509Certificate2 GetCertificate(string thumbprint)
            {
                using (X509Store certStore = new X509Store(StoreName.My, StoreLocation.CurrentUser))
                {
                    certStore.Open(OpenFlags.ReadOnly);
                    X509Certificate2Collection certCollection = certStore.Certificates.Find(X509FindType.FindByThumbprint, thumbprint, false);
                    if (certCollection.Count > 0) return certCollection[0];
                }
                return null;
            }

            public static X509Certificate2 buildSelfSignedServerCertificate(string CertificateName)
            {
                SubjectAlternativeNameBuilder sanBuilder = new SubjectAlternativeNameBuilder();
                sanBuilder.AddIpAddress(IPAddress.Loopback);
                sanBuilder.AddIpAddress(IPAddress.IPv6Loopback);
                sanBuilder.AddDnsName("localhost");
                sanBuilder.AddDnsName(Environment.MachineName);

                X500DistinguishedName distinguishedName = new X500DistinguishedName($"CN={CertificateName}");

                using (RSA rsa = RSA.Create(2048))
                {
                    var request = new CertificateRequest(distinguishedName, rsa, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);

                    request.CertificateExtensions.Add(
                        new X509KeyUsageExtension(X509KeyUsageFlags.DataEncipherment | X509KeyUsageFlags.KeyEncipherment | X509KeyUsageFlags.DigitalSignature, false));


                    request.CertificateExtensions.Add(
                       new X509EnhancedKeyUsageExtension(
                           new OidCollection { new Oid("1.3.6.1.5.5.7.3.1") }, false));

                    request.CertificateExtensions.Add(sanBuilder.Build());

                    var certificate = request.CreateSelfSigned(new DateTimeOffset(DateTime.UtcNow.AddDays(-1)), new DateTimeOffset(DateTime.UtcNow.AddDays(3650)));

                    return new X509Certificate2(certificate.Export(X509ContentType.Pfx, "WeNeedASaf3rPassword"), "WeNeedASaf3rPassword", X509KeyStorageFlags.MachineKeySet);
                }
            }
        }       
    }
}