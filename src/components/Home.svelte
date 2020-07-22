<script>

</script>

<main>
    <div class="container">
        <textarea class="text" id="data"
            onkeyup="countChars('data','charcount');"
            onkeydown="countChars('data','charcount');"
            onmouseout="countChars('data','charcount');"
            placeholder=" Type your text here..."></textarea>
    </div>

        <div>
        <span>
        <span class="check-b">[</span><span id="charcount">0</span><span class="check-b">]</span>
        <button id="r-btn" type="reset" title="Clear textarea" on:click={refreshPage} class="btn">
        <i class="fas fa-trash-alt"></i>Clear</button>
        </span>
    </div>
</main>

<style>
    /* Textarea */
    textarea {
        width: 100%;
        height: 92.7vh;
        font-size: 16px;
        border-radius: 5px;
        resize: none;
        border: solid 1px #ffcc5c;
    }

    textarea:focus {
        outline: none !important;
    }
</style>