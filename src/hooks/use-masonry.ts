import {useEffect, useState} from 'react';
import {flatDeep} from "../utils";

const useMasonry = (portfolioData: any[], masonryListWrap: string, masonryGrid: string, btnWrap: string, btn: string) => {
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        const imagesloaded = require('imagesloaded');
        const Isotope = require('isotope-layout');

        const mixCategories = portfolioData.map(item => {
            return item.categories.map((cat: string) => cat)
        })
        const allCat = flatDeep(mixCategories, Infinity);
        const commonCategories = [...new Set(allCat)] as string[];

        setCategories(commonCategories);



        // This for Images
        const masonryList = document.querySelector(masonryListWrap);
        if (!masonryList) return;
        imagesloaded(masonryList, () => {
            const projectItems = masonryList.querySelectorAll(masonryGrid);
            let start = 1;
            while (start < projectItems.length) {
                projectItems[start].classList.add('grid-width-2');
                start += 4;
            }
            let Iso = new Isotope(masonryList, {
                itemSelector: masonryGrid
            });

            const filterWrap = document.querySelector(btnWrap)
            const filterItems = document.querySelectorAll(btn);
            filterItems.forEach((filterItem) => {
                filterItem.addEventListener('click', (e) => {
                    const filterCate = (filterItem as HTMLElement).dataset.filter as string;
                    filterWrap?.querySelector('.is-checked')?.classList.remove('is-checked');
                    (e.target as HTMLElement).classList.add('is-checked');
                    Iso.arrange({
                        filter: filterCate
                    })
                })
            })
        })
    }, []);
    return {categories}
}

export default useMasonry
