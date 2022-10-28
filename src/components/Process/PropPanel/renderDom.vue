<script>
export default {
    name: "renderDom",
    functional: true,
    props: {
        render: Function,
    },
    render: (h, ctx) => {
        return ctx.props.render(h);
    }
}
</script>