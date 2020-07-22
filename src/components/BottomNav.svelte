<script>
    // Char count
    function countChars(countfrom, displayto) {
        let len = document.getElementById(countfrom).value.length;
        document.getElementById(displayto).innerHTML = len;
    }
</script>

<main>
    <div>
        <span>
        <span class="check-b">[</span><span id="charcount">0</span><span class="check-b">]</span>
        <button id="r-btn" type="reset" title="Clear textarea" on:click={refreshPage} class="btn">
        <i class="fas fa-trash-alt"></i>Clear</button>
        </span>
    </div>
</main>

<style>

</style>