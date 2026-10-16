# Contributing to Facial Booking Website

Thanks for your interest in improving this project! Bug reports, ideas and pull requests are all welcome.

## Getting set up

1. Fork the repository and clone your fork.
2. Install and run the app (details in the [README](README.md#getting-started)):

   ```bash
   cd Tamrin
   npm install
   npm run dev
   ```

   The booking form works out of the box. To send requests to your own inbox, copy `.env.example` to `.env` and add your own EmailJS values.

## Workflow

1. Create a branch from `main` with a descriptive name, such as `feat/service-selection`, `fix/phone-validation` or `docs/readme-typo`.
2. Make your changes in small, focused commits.
3. Before pushing, make sure both of these pass from the `Tamrin/` folder:

   ```bash
   npm run lint
   npm run build
   ```

4. Open a pull request against `main` and fill in the template.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add service selection to the booking form
fix: validate the phone number before sending
docs: update EmailJS setup instructions
refactor: extract the service card into its own component
```

## Code style

- Use functional components and React hooks.
- Keep each component in its own folder with its own `.css` file.
- Use clear names for components, handlers and state.
- The interface is Persian (right-to-left). Test on desktop and on a narrow mobile viewport.
- Never commit secrets. Use environment variables and update `.env.example` when you add one.

## Reporting bugs and requesting features

Please use the [issue templates](../../issues/new/choose) and include steps to reproduce, what you expected, what happened, and screenshots if relevant.
