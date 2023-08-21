<template>
    <div class="rivate-overview-area pb-100">
        <div class="container-fluid">
            <div class="overview-animate-text">
                <span>We Provide Best <strong>Digital</strong> Marketing Solutions&nbsp;</span>
            </div>
        </div>

        <svg style="display:none;">
            <defs>
                <filter id="stroke-text">
                    <feMorphology radius="1" operator="dilate"></feMorphology>
                    <feComposite operator="xor" in="SourceGraphic"/>
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Overview'
}
</script>