import { defineConfig } from 'rollup';
import { buildConfig } from '../../scripts/build-config.mjs';

const configs = buildConfig({ packageName: 'hzKonva' });

export default defineConfig(configs);