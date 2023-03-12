# Reproduction for Tauri Android issue

Most of the time there will be issues related to missing characters in what the webview receives.

Which file is affected seems to be random, but which characters seems less random, almost as if there's an encoding issue. So for example if you just reload the window a couple of times in the inspector you should see that which file it complains at is somewhat random, but it tends to be the same set of characters that have randomly been removed.

The issue is more obvious in a larger project, this is just a minimal repro, but in another larger project of mine it not only fails more frequently but also which file is affected is more random.

Note that again it doesn't always happen. I haven't figured out exactly what stars need to be aligned in order for it not to fail, but re-run `tauri android dev` a couple of times at least to see if you can get it to happen. In this small project I got it to work a couple of times, but without changing a single thing just re-running the dev command it failed again.

Support thread on Discord: https://discord.com/channels/616186924390023171/1084240262835998770/1084240262835998770

## Steps

1. Start either an emulator or physical device, I've had the issue on both
2. Edit `nuxt.config.ts` to add your IP since I was too lazy to use `internal-ip` currently
3. Run `pnpm i`
4. Run `pnpm tauri android init`
5. Run `pnpm tauri android dev`

## tauri info

```log
Environment
› OS: Windows 10.0.22621 X64
› Webview2: 110.0.1587.63
› MSVC: - Visual Studio Community 2022 - Visual Studio Build Tools 2019
› Node.js: 18.12.1
› npm: 8.19.2
› pnpm: 7.29.1
› yarn: 1.22.19
› rustup: 1.25.2
› rustc: 1.68.0
› cargo: 1.68.0
› Rust toolchain: stable-x86_64-pc-windows-msvc

Packages
› @tauri-apps/cli [NPM]: 2.0.0-alpha.2
› @tauri-apps/api [NPM]: Not installed!
› tauri [RUST]: 2.0.0-alpha.3,
› tauri-build [RUST]: 2.0.0-alpha.1,
› tao [RUST]: 0.17.0,
› wry [RUST]: 0.26.0,

App
› build-type: bundle
› CSP: unset
› distDir: ../dist
› devPath: http://localhost:3000/
› framework: Vue.js (Nuxt)
› bundler: Webpack

App directory structure
├─ .git
├─ .nuxt
├─ node_modules
├─ src
└─ src-tauri
```
