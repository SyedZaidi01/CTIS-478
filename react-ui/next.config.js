const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALAYZE === 'true'
})
module.exports = withBundleAnalyzer({
    images: {
        domains: [''],
    },
    i18n: {
        locales: ['tr','en'],
        defaultLocale: 'tr',
    },
});

