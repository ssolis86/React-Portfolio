import image from '../assets/fitness_tracker.png';
import imageTwo from '../assets/ecommerce.png';
import imageThree from '../assets/weather.png';
import imageFour from '../assets/workday.png';
import imageFive from '../assets/vaccine.png';
import imageSix from '../assets/roadtrippers.png';

const projects = [
    {
        title: 'Fitness Tracker',
        deployed: 'https://still-fjord-86390.herokuapp.com/',
        ghub: 'https://github.com/ssolis86/Fitness-Tracker',
        imageUrl: `url(${image})`,
        time: 1500,
    },
    {
        title: 'e-Commerce Back End',
        deployed: 'https://github.com/ssolis86/ORM-Ecommerce-Back-End',
        ghub: 'https://github.com/ssolis86/ORM-Ecommerce-Back-End',
        imageUrl: `url(${imageTwo})`,
        time: 1500,
    },
    {
        title: 'Weather Dashboard',
        deployed: 'https://ssolis86.github.io/weather-dashboard/',
        ghub: 'https://github.com/ssolis86/weather-dashboard',
        imageUrl: `url(${imageThree})`,
        time: 1500,
    },
    {
        title: 'Workday Scheduler',
        deployed: 'https://ssolis86.github.io/workdayscheduler/',
        ghub: 'https://github.com/ssolis86/workdayscheduler',
        imageUrl: `url(${imageFour})`,
        time: 1500,
    },{
        title: 'Digital Vaccine Tracker',
        deployed: 'https://ancient-hollows-23369.herokuapp.com/',
        ghub: 'https://github.com/wrp90/Vaccination_Tracker',
        imageUrl: `url(${imageFive})`,
        time: 1500,
    },
    {
        title: 'Road Trippers',
        deployed: 'https://enigmatic-taiga-76938.herokuapp.com/',
        ghub: 'https://github.com/KannaVairavan/Travel-App',
        imageUrl: `url(${imageSix})`,
        time: 1500,
    },
]

export default projects;