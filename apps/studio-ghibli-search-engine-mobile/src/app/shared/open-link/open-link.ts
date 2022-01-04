import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';

/**
 * This is a custom hook to open a link in react native
 * @param url url link to open
 * @param title title to display when failed to open link
 * @returns
 */
export function useLink(url: string, title: string) {
  const openLinkCallback = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Could not open link ${title}`);
    }
  }, [url, title]);

  return openLinkCallback;
}
