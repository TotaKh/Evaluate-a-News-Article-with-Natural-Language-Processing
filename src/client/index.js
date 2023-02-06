import { checkURL } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.addEventListener('DOMContentLoaded' , ()=>{
    const btn = document.getElementById('btn')
    btn.addEventListener('click', event => handleSubmit(event))
}
)

console.log(checkURL);

