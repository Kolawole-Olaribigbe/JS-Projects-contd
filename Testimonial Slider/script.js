const testimonials = [
    {
        name: "Akeginu",
        photoUrl: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/910243fa-d858-4bee-b1be-a3d37f1bde6d/width=1200/910243fa-d858-4bee-b1be-a3d37f1bde6d.jpeg",
        text: "I have been using Illume for my child's education and I am extremely impressed with the platform. It is very easy to understand and navigate, making it perfect for young children. The user-friendly interface has made learning a fun and enjoyable experience for my child. The interactive lessons and activities have kept my child engaged and motivated to learn. I highly recommend Illume to any parent looking for a comprehensive and child-friendly education platform."
    },
    {
        name: "Gennosuke",
        photoUrl: "https://www.nautiljon.com/images/perso/00/06/gennosuke_kouga_760.webp",
        text: " I can confidently say that biotechnology is a game-changer. Their effective vaccines and treatments, like the one I received for a serious illness, have greatly improved the quality of life for countless individuals. I am in awe of the dedication and innovation of the biotechnology industry, and I am grateful for the positive impact they have had on my life and the lives of others. Thank you, biotechnology, for your tireless efforts in making the world a healthier and safer place. You have my utmost respect and admiration."
    },
    {
        name: "Muroga Hyoma",
        photoUrl: "https://static.wikia.nocookie.net/dubbing9585/images/2/2d/Hyouma.jpg/revision/latest?cb=20190418233414",
        text: "The facilities at Zephyr Hospital are top-notch, with state-of-the-art equipment and technology. I felt confident and at ease knowing that I was in good hands. The doctors and nurses were extremely knowledgeable and attentive, making sure to address all of my concerns and answer any questions I had. But what truly sets Zephyr Hospital apart is the level of care and compassion they provide. It's clear that the staff genuinely cares about their patients and goes above and beyond to ensure their comfort and well-being."
    },
] 
const imgComp = document.querySelector("img")
const textComp = document.querySelector(".text")
const usernameComp = document.querySelector(".username")

let index = 0

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} =
    testimonials[index]
    imgComp.src = photoUrl
    textComp.innerText = text
    usernameComp.innerText = name
    index++

    if (index === testimonials.length) {
        index = 0
    }

    setTimeout(() => {
        updateTestimonial
    }, 10000)
}