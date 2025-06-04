const storiesContainer = document.querySelector('.stories');
const fullScreen = document.querySelector('.full-screen');

const storyArr = [
    {
        dp: "dpone.avif",
        story: "storyone.avif"
    },
    {
        dp: "dptwo.avif",
        story: "storytwo.avif"
    },
    {
        dp: "dpthree.avif",
        story: "storythree.avif"
    },
    {
        dp: "dpfour.avif",
        story: "storyfour.avif"
    },
];

// Function to render all stories
function renderStories() {
    let clutter = "";
    storyArr.forEach((storydata, idx) => {
        clutter += `<div class="story">
                     <img id="${idx}" src="${storydata.dp}" alt="">
                    </div>`;
    });
    storiesContainer.innerHTML = clutter;
}

// first render existing stories
renderStories();

// this is my story  Upload function
function uploadStory() {
    const uploadInput = document.getElementById('upload');

    // read input file
    const file = uploadInput.files[0];

    if (file) {
      
        // builtin js function to read file
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = e.target.result;

            // Push to array and use same image for dp and story
            storyArr.push({ dp: imageUrl, story: imageUrl });

            // Re-render stories
            renderStories();
        }
        
        reader.readAsDataURL(file);
    }
}

// Click listener for viewing full story
storiesContainer.addEventListener('click', (e) => {
    const { story } = storyArr[e.target.id];
    fullScreen.style.backgroundImage = `url(${story})`;
    fullScreen.classList.add('active');

    setTimeout(() => {
        fullScreen.classList.remove('active');
    }, 2000);
});
