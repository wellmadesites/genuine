<script>
document.querySelectorAll('a[href="#top"]').forEach(a => a.onclick = e => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
</script>
