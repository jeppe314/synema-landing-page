# Universal links for synemaapp.com

Join links use `https://synemaapp.com/join/{CODE}`. To open the native app directly
from Safari/Chrome (and the camera QR scanner), configure these Vercel env vars:

| Variable | Where to find it |
|----------|------------------|
| `APPLE_TEAM_ID` | [Apple Developer](https://developer.apple.com/account) → Membership → Team ID |
| `ANDROID_SHA256_FINGERPRINT` | Release keystore: `keytool -list -v -keystore your.keystore \| grep SHA256` |

After setting them, redeploy the landing page. Verify:

- https://synemaapp.com/.well-known/apple-app-site-association
- https://synemaapp.com/.well-known/assetlinks.json

The join fallback page works without these — users can tap **Open in Synema** or
enter the code manually.
