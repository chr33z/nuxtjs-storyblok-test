import Vue from 'vue';
import Page from '~/components/Page.vue';
import Teaser from '~/components/Teaser.vue';
import Grid from '~/components/Grid.vue';
import Feature from '~/components/Feature.vue';
import FeaturedArticles from '~/components/FeaturedArticles.vue';
import ArticleTeaser from '~/components/ArticleTeaser.vue';
import Pano from '~/components/Pano.vue';
import PanoHotspot from '~/components/PanoHotspot.vue';
import PanoHotspotImage from '~/components/PanoHotspotImage.vue';
import PanoHotspotText from '~/components/PanoHotspotText.vue';

Vue.component('page', Page);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('featured-articles', FeaturedArticles);
Vue.component('article-teaser', ArticleTeaser);

// Pano Components
Vue.component('pano', Pano);
Vue.component('pano-hotspot', PanoHotspot);
Vue.component('pano-hotspot-image', PanoHotspotImage);
Vue.component('pano-hotspot-text', PanoHotspotText);
