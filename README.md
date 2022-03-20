# SWE Foam Take Home Challenge - Michelle Huang

Video Showcasing Project Functionality: [Click Here!](https://www.loom.com/share/255024f249064560b751205cc3cefe91)

Built with React on the frontend and Ruby on Rails on the backend, this project allows users to view all images, mark individual images as foaming, non-foaming, or unclassified, and filter images depending on whether they are foaming, non-foaming, or unclassified. 

To improve user experience, results are paginated so only 100 images are displayed on each page. In addition, while users are viewing individual images, they are able to use their left and right arrow key to view the next or previous image. Lastly, to ensure efficiency and productivity, unclassified images are distinctly marked with a yellow border to draw greater attention to them.

## Run the Project
* npm install
* bundle install
* npm start
* rails s 

Once all commands are run, open localhost to view the project!
## Technologies
* Ruby on Rails
* React / Redux
* PostgreSQL
* JavaScript / AJAX / JBuilder
* HTML5 / CSS

## Features
* ### View Images from the Reactor Run
![View Images](app/assets/images/readme_view_images.gif)
* ### Mark Images as Foaming, Non-Foaming, or Unclassified (Have Marks Persist)
![Mark Images](app/assets/images/readme_mark_images.gif)
* ### Filter by Foaming, Non-Foaming, and Unclassified
![Filter Images](app/assets/images/readme_filter_images.gif)
* ### Pagination
To integrate frontend pagination, I chose to display 100 images on each page and have my local state hold the images that matched the filter type (foaming, non-foaming, unclassified, or all). The paginate function that occurs on click is placed on the Pagination component and is responsible for setting the current page to the correct one using the useState React hook.
```javascript
const [currentPage, setCurrentPage] = useState(1);
const [imagesPerPage, setImagesPerPage] = useState(100);
const [allImages, setAllImages] = useState([]);
const [filteredImages, setFilteredImages] = useState([]);

const indexOfLastImage = currentPage * imagesPerPage;
const indexOfFirstImage = indexOfLastImage - imagesPerPage;
const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
}

function Pagination( {imagesPerPage, totalImages, paginate}) {
    const imageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
        imageNumbers.push(i);
    }


    return (
        <div>
            <ul className="pagination">
                {imageNumbers.map(number => 
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                    </li>
                )}
            </ul>
        </div>
    )

}
```
* ### Keyboard Shortcuts


## Wireframes
* ### Index Page
![](app/assets/images/readme_index.png)
* ### Show Page
![](app/assets/images/readme_show.png)