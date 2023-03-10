import { useQuery } from "@tanstack/vue-query"
import { useSDK } from "./useSDK";

export const useCandidateSummary = (steamUrl: string) => {
	const { sdk } = useSDK();
	const queryKey = ['masochist', 'candidate', steamUrl];

	return useQuery(
		queryKey,
		() => sdk.getCandidateSummary({ steamUrl }),
		{
			enabled: !!steamUrl?.length,
		},
	);
};