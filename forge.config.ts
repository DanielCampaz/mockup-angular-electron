import type { ForgeConfig } from '@electron-forge/shared-types';
import { FusesPlugin } from'@electron-forge/plugin-fuses'
import { FuseV1Options, FuseVersion } from '@electron/fuses'
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';

const NAME_MAINTAINER = "Your Name";
const NAME_PROJECT = 'my_electron_angular';
const COMPACT_NAME_PROJECT = 'myelectronangular';
const COMPANY_NAME = 'Nombre De Tu Empresa o Organizacion';
const COMPACT_COMPANY_NAME = 'nombredetuempresaoorganizacion';
const COPYRIGHT_YEAR = 2025;
const DESCRIPTION_PROJECT = 'Mock Up of Electron whit Angular 20 and Protocol of Compile Whit MacOs, Win, and Linux';
const PRODUCT_NAME_PROJECT = 'My Electron Angular';
const NAME_PREFIX = 'Setup';
const NAME_SETUP_EXE = `${NAME_PROJECT}-${NAME_PREFIX}`;

const config: ForgeConfig = {
  packagerConfig: {
    name: NAME_PROJECT,
    icon: 'electron/assets/icon',
    executableName:PRODUCT_NAME_PROJECT,
    asar: true,
    appCopyright: `© ${COPYRIGHT_YEAR} ${COMPANY_NAME}`,
    appBundleId: `com.${COMPACT_COMPANY_NAME}.${COMPACT_NAME_PROJECT}`,
    appCategoryType: 'public.app-category.productivity'
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      name: NAME_PROJECT,
      setupExe: `${NAME_SETUP_EXE}.exe`,
      authors: COMPANY_NAME,
      description: DESCRIPTION_PROJECT,
      setupIcon: 'electron/assets/icon.ico'
    }, ['win32']),
    new MakerZIP({}, ['darwin']),
    new MakerDeb({
      options: {
        maintainer: NAME_MAINTAINER,
        icon: 'electron/assets/icon.png'
      }
    },['linux']),
    new MakerRpm({},['linux'])
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'DanielCampaz',
          name: 'mockup-angular-electron',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
