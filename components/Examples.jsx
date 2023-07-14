import React from 'react'
import Card from './Card'

const Examples = () => {
  return (
    <div className='mt-10 mb-10 flex flex-col gap-5'>
        <h1 className='text-lg text-gray-600'>VIEW SIMILAR TEMPLATES TO MULTOR</h1>
        <p className='text-center'>agency-lead-generationconsultingecourseeventfeaturedhealthlanding-pageslead-generationmedicalwebinarwordpress</p>
        <div className='flex flex-wrap gap-10 tablet:justify-center'>
            <Card image={"https://unbounce.com/photos/unbounce-template-thumbnail-cliamto-272x253-lores-272x253.jpg"} heading="Climato" text="This simple ‘no fold’ template is perfect for pitching your exciting new digital product with just 1 headline, 1 copy block, and 1 image—no scrolling required."/>
            <Card image={"https://unbounce.com/photos/Insura-FINAL-272x253.jpg"} heading="Insura (Lightbox)" text="This lead-generating template is perfect for insurance providers. It includes industry-appropriate icons and a call-to-action that opens the form in a lightbox."/>
            <Card image={"https://unbounce.com/photos/unbounce-template-thumbnail-alacarte_click-272x253-lores-272x253.jpg"} heading="A la Carte (Lead Generation)" text="Something delicious is coming! Use this template to capture emails and create excitement for a new business."/>
        </div>
    </div>
  )
}

export default Examples