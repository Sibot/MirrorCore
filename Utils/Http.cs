using System.Net.Http;
using System.Net.Http.Headers;

namespace MirrorCore.Utils
{
    public class Http
    {
        public static string Get(string url, bool fakeUserAgent = false)
        {
            using (var client = new HttpClient())
            {
                if (fakeUserAgent)
                {
                    var userAgent = new ProductInfoHeaderValue("DotNet-Core-HttpClient", "1.0");
                    client.DefaultRequestHeaders.UserAgent.Add(userAgent);
                }

                var result = client.GetStringAsync(url).Result;
                return result;
            }

        }

    }
}
