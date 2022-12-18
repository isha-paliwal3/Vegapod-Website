import 'animate.css';
import './TeamPage.css'
import TeamMember from './TeamMember';
export const TeamPage = () => {

  return (
    <section className='team' id='team' style={{background:'white'}}>
      <div className='teamBanner'></div>
      <p className='teamDescription'> We're Team VegaPod, the MIT-WPU Hyperloop team working to bring Hyperloop technology to reality</p>
     
      <section className="section-team">
            <TeamMember/>
        </section>
    </section>
  )
}
