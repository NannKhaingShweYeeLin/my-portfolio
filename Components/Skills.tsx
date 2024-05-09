import React from 'react'

import SkillsLanguages from './SkillsLanguages'


const Skills = () => {
  return (
    
    <div id="skills" className='pt-[4rem] md:pt-[8rem] pb-[2rem] bg-[#09101a]'>
        
        <h1 className='heading'><span className='text-yellow-400'>Skill</span></h1>
        
        <div className='w-[80%] mx-auto pt-[8rem] md:pt-[8rem] grid grid-cols-2 md:grid-cols-4 gap-[2rem] items-center'>
        
        <div>
            
            <SkillsLanguages 
            skill1="html" 
            skill2="css" 
            skill3="javascript" 
            skill4="reactjs" 
            image1="/images/ht.png"
            image2="/images/css.jpg"
            image3="/images/jss.jpg"
            image4="/images/rea.png"
             level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="JQuery" skill2="Bootstrap" skill3="API" skill4="Spring" 
            image1='/images/j.png'
            image2='/images/boos.png'
            image3='/images/api.png'
            image4='/images/sprin.png'
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="nextjs" skill2="PowerApp" skill3="postman" skill4="wix" 
            image1='/images/nex.jpg'
            image2='/images/powe.jpg'
            image3='/images/post.png'
            image4='/images/wi.png'
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="Tailwind" skill2="MongoDB" skill3="git" skill4="bun" 
            image1='/images/tailwind.jpg'
            image2='/images/mongo.png'
            image3='/images/git.png'
            image4='/images/bun.png'
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        

        
       
        </div>
        
    </div>
  )
}

export default Skills