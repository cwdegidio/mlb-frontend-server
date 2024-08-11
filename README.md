# MLB Batting Leader Board

This is a project created using Vite + React and Recharts. It is used to display data that is collected from the MLB Analyzer after being scraped each morning.

Testing makes use of Jest and mocking is provided by `jest-fetch-mock`. DOM rendering for testing is provided by `@testing-library/jest-dom`. Data is provided
by an API created using rust ran in a docker container (https://github.com/cwdegidio/mlb-rest-server).

When running in local, the following Node commands are available:

| **Script**      | **Commands**                                                                |
|:----------------|:----------------------------------------------------------------------------|
| `npm run dev`   | `vite`                                                                      |
| `npm run build` | `vite build`                                                                |
| `npm run lint`  | `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0` |
| `npm run preview` | `vite preview`                                                              |
| `npm run test` | `jest --coverage --silent`                                                  |
