import {  redirect } from '@shopify/remix-oxygen';

export async function action({request, context}) {
  const clientId = context.env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID;

  // In a development environment, the origin of a tunneled host has an http protocol. Only the https protocol is supported for origin, logout and callback URIs. To ensure the storefront origin is always using the https protocol, check for http and if found replace it with https.
  const url = new URL(request.url);
  const origin = url.protocol === 'http:' ? url.origin.replace('http', 'https') : url.origin;

  const customerAccountApiUrl = context.env.PUBLIC_CUSTOMER_ACCOUNT_API_URL;
  const loginUrl = new URL(`${customerAccountApiUrl}/auth/oauth/authorize`);

  loginUrl.searchParams.set('client_id', clientId);
  loginUrl.searchParams.append('response_type', 'code');
  loginUrl.searchParams.append('redirect_uri', `${origin}/authorize`);
  loginUrl.searchParams.set(
    'scope',
    'openid email https://api.customers.com/auth/customer.graphql',
  );

  const redirectHeaders = new Headers();
  redirectHeaders.append('Set-Cookie',await context.session.commit())

  return redirect(loginUrl.toString(), {
    headers:redirectHeaders
  });
}
export async function loader({context}) {
  return null;
}
