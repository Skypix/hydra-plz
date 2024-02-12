import {Form} from '@remix-run/react';

export function LoginButton() {
  return (
    <div>
      <Form method="post" action="/authorize">
        <button>Login</button>;
      </Form>
    </div>
  );
}
