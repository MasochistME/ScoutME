import { SDK } from '@masochistme/sdk/dist/v1/sdk'

let sdk: SDK;

export const useSDK = () => {
  if (sdk) return { sdk };
  sdk = new SDK({
		host: 'http://localhost:3081',
		authToken: 'masochist',
	});
  return { sdk };
}