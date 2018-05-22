<template>
    <div v-if="hasPages">
        <ul class="pagination">
            <li v-if="onFirstPage" class="page-item disabled">
                <span class="page-link" aria-hidden="true">&lsaquo;</span>
            </li>
            <li v-else class="page-item">
                <router-link class="page-link" :to="previousPageUrl" rel="prev">&lsaquo;</router-link>
            </li>

            <template v-for="element in elements">
                <template v-if="typeof element === 'string'">
                    <li class="page-item disabled">
                        <span class="page-link">{{ element }}</span>
                    </li>
                </template>
                <template v-else>
                    <li v-if="element.page === data.current_page" class="page-item active">
                        <span class="page-link">{{ element.page }}</span>
                    </li>
                    <li v-else class="page-item">
                        <router-link :to="element.url" class="page-link">{{ element.page }}</router-link>
                    </li>
                </template>
            </template>

            <li v-if="hasMorePages" class="page-item">
                <router-link :to="nextPageUrl" class="page-link" rel="next">&rsaquo;</router-link>
            </li>
            <li v-else class="page-item disabled">
                <span class="page-link" aria-hidden="true">&rsaquo;</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: [
            'data'
        ],
        computed: {
            hasPages () {
                return this.data != null && this.data.total > 0;
            },

            onFirstPage () {
                return this.data.current_page === 1;
            },

            previousPageUrl () {
                return this.url(Math.max(this.data.current_page - 1, 1));
            },

            nextPageUrl () {
                return this.url(Math.min(this.data.current_page + 1, this.data.last_page));
            },

            hasMorePages () {
                return this.data.current_page !== this.data.last_page;
            },

            elements () {
                let elements = [];
                for (let i = 1; i <= this.data.last_page; i++) {
                    let pageDiff = Math.abs(this.data.current_page - i);
                    if (pageDiff < 3 || i === 1 || i === this.data.last_page) {
                        elements.push({
                            page: i,
                            url: this.url(i)
                        });
                    } else if (pageDiff === 3) {
                        elements.push('...');
                    }
                }

                return elements;
            }
        },
        methods: {
            url (page) {
                return this.$route.path+'?page='+page;
            }
        }
    }
</script>

<style scoped>

</style>