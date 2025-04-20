import { defineConfig } from 'rollup';
import { buildConfig } from '../../scripts/build-config.mjs';

const configs = buildConfig({ packageName: 'hz-krpano' });

export default defineConfig(configs);