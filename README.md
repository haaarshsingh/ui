## Harsh's UI Laboratory

Experimental design laboratory—free and open-source components.

## Quickstart

Clone the website locally:

```
git clone https://github.com/haaarshsingh/www.git
```

### Setting up the project

```bash
cd www

# Install dependencies
bun install
```

### Starting server

```bash
bun dev
```

Server should now be running on [localhost](https://localhost:3000).

### Environment Variables

This website uses [Resend Broadcasts]([upstash.com](https://resend.com/blog/send-marketing-emails-with-resend-broadcasts)) to manage the newsletter. Sign up for an account, and replace the following API key in `.env.EXAMPLE` with your own:

```
RESEND_API_KEY=""
```

## Licensing

This project is a collection of *experimental* components, and it's meant to explore concepts that might not be things you want to put into a production application. That being said, it's licensed under [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
