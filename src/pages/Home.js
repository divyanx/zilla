import './Home.css';

import Button from '../components/Button/Button';
function Home() {
    return (
        <div className='main-home'>
            <div className='main-context'>
                <h1>ZILLA</h1>
                <p>
                    ZILLA helps you create, maintain and organize sticky notes for your different projects.
                </p>
            </div>
            <Button destination='/new-project' text='Create New Project' />
        </div>
    );
}
export default Home;