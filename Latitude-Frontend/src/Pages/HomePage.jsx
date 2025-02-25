import Page from '../Components/Page';
import Slider from '../Sections/Slider';
import InfinityFlagSlider from '../Sections/InfinityFlagSlider';
import Services from '../Sections/Services';
import Stats from '../Sections/Stats';
import ApplyNow from '../Sections/ApplyNow';
import SuccessStory from '../Sections/SuccessStory';
import VoiceOfTheCEO from '../Sections/VoiceOfTheCEO';
import JobList from '../Sections/Joblist';
// import PayYourFees from '../Sections/PayYourFees';
export default function HomePage() {
    return (
        <Page>
            <Slider />
            <InfinityFlagSlider />
            <ApplyNow />
            <Services />
            <Stats />
            {/* <PayYourFees /> */}
            <VoiceOfTheCEO />
            <JobList />
            <SuccessStory />
        </Page>
    );
}
