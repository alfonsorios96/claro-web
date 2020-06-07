import {SearchNav} from '../search-nav.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('search-nav', () => {
    test('is defined', () => {
        const el = document.createElement('search-nav');
        assert.instanceOf(el, SearchNav);
    });

    test('listen event movies-filtered when input value is empty', async () => {
        const source = [
            {
                title: 'Avatar: La leyenda de Aang'
            },
            {
                title: 'Avatar. La de los seres azules'
            },
            {
                title: 'Scarface'
            },
            {
                title: 'Casino'
            }
        ];
        const el = await fixture(html`<search-nav></search-nav>`);
        el.source = source;

        el.addEventListener('movies-filtered', event => {
            assert.strictEqual(event.detail.movies.length, 4);
        });

        el.shadowRoot.querySelector('paper-input').value = '';
    });

    test('listen event movies-filtered when input value has two coincidences', async () => {
        const source = [
            {
                title: 'Avatar: La leyenda de Aang'
            },
            {
                title: 'Avatar. La de los seres azules'
            },
            {
                title: 'Scarface'
            },
            {
                title: 'Casino'
            }
        ];
        const el = await fixture(html`<search-nav></search-nav>`);
        el.source = source;
        await el.updateComplete;

        el.addEventListener('movies-filtered', event => {
            assert.strictEqual(event.detail.movies.length, 2);
        });

        el.shadowRoot.querySelector('paper-input').value = 'avatar';
    });

    test('listen event movies-filtered when input value has not coincidences', async () => {
        const source = [
            {
                title: 'Avatar: La leyenda de Aang'
            },
            {
                title: 'Avatar. La de los seres azules'
            },
            {
                title: 'Scarface'
            },
            {
                title: 'Casino'
            }
        ];
        const el = await fixture(html`<search-nav></search-nav>`);
        el.source = source;
        await el.updateComplete;

        el.addEventListener('movies-filtered', event => {
            assert.strictEqual(event.detail.movies.length, 0);
        });

        el.shadowRoot.querySelector('paper-input').value = 'zzzz';
    });
});
