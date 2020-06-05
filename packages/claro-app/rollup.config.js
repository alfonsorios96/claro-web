import merge from 'deepmerge';
import {createSpaConfig} from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    developmentMode: false,
    injectServiceWorker: true
});

export default merge(baseConfig, {
    input: './index_prod.html'
});