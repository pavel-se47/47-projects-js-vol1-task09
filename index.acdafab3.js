const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=document.querySelector(".js-gallery"),i=document.querySelector(".js-lightbox"),o=document.querySelector('[data-action="close-lightbox"]'),a=document.querySelector(".lightbox__overlay");e.forEach((e=>{const i=document.createElement("li");i.classList.add("gallery__item");const o=document.createElement("a");o.classList.add("gallery__link"),o.setAttribute("href",`${e.original}`);const a=document.createElement("img");a.classList.add("gallery__image"),a.setAttribute("src",`${e.preview}`),a.setAttribute("data-source",`${e.original}`),a.setAttribute("alt",`${e.description}`),i.append(o,a),t.append(i)}));const n=()=>{i.classList.remove("is-open"),i.children[1].firstElementChild.alt="",i.children[1].firstElementChild.src="",window.removeEventListener("keydown",r),window.removeEventListener("keydown",p)},r=e=>{"Escape"===e.code&&n()},p=t=>{let o=i.children[1].firstElementChild.alt;if("ArrowRight"===t.code)for(let t=0;t<e.length-1;t+=1)o===e[t].description&&(i.children[1].firstElementChild.alt=e[t+1].description,i.children[1].firstElementChild.src=e[t+1].original);else if("ArrowLeft"===t.code)for(let t=1;t<e.length;t+=1)o===e[t].description&&(i.children[1].firstElementChild.alt=e[t-1].description,i.children[1].firstElementChild.src=e[t-1].original)};t.addEventListener("click",(e=>{if("IMG"===e.target.nodeName)return e.target.dataset.source})),t.addEventListener("click",(e=>{"IMG"===e.target.nodeName&&(i.classList.add("is-open"),i.children[1].firstElementChild.alt=e.target.alt,i.children[1].firstElementChild.src=e.target.dataset.source,window.addEventListener("keydown",r),window.addEventListener("keydown",p))})),o.addEventListener("click",n),a.addEventListener("click",(e=>{e.currentTarget===e.target&&n()}));
//# sourceMappingURL=index.acdafab3.js.map
