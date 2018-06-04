import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("491477725516-s7pnas5fdqg8c2c7350m38ca427ml4vl.apps.googleusercontent.com")
  }]);

  return config;
}
