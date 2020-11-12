plugins: [
    !production &&
    livereload({
        watch " 'public' ,
        clientUrl: ProcessingInstruction.env.CLIENT_URL
    })
]