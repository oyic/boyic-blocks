import { breakpoint } from "../modules/breakpoint"

export default () => {
    const banner = document.querySelector('.--block--banner.--boyic--custom--blocks')
    const clipmask = banner.querySelector('.--clip--mask')
    const bg_image_container = banner.querySelector('.background-image')
    const bg_image = bg_image_container.querySelector('img')
    const content_container = banner.querySelector('.content > .container')
    let device = breakpoint()
    const resize_banner = () => {
        addEventListener('resize',()=>{
            console.log('resize triggered')
            device = breakpoint()
            if(bg_image_container.dataset.backgroundMobile != '') {
              if ( device == 'mobile' || device == 'tablet' ) {
                  bg_image_container.style.backgroundImage = `url(${bg_image_container.dataset.backgroundMobile})`
                  bg_image_container.style.height = content_container.offsetHeight + 120 +'px'
                  console.log(content_container.offsetHeight)
          
              }   
              else {
                    bg_image_container.style.backgroundImage = ""
                    bg_image_container.style.height = '100%'
                }
              } 
        })
    }
    resize_banner()
    if(bg_image_container.dataset.backgroundMobile != '') {
      if ( device == 'mobile' || device == 'tablet' ) {
        bg_image_container.style.backgroundImage = `url(${bg_image_container.dataset.backgroundMobile})`
        bg_image_container.style.height = content_container.offsetHeight + 120 +'px'
        console.log(content_container.offsetHeight)

    }   
    else {
          bg_image_container.style.backgroundImage = ""
      }
    }
    //@TODO: Please refactor - clipping mask effect
    if(clipmask) clipmask.style.setProperty('--swapping--mask--background', `url(${clipmask.dataset.clipMaskBackground})`)

   
}