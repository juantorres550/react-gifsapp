import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const apiKey = 'iUS3QhVnUlnMsnxHRmybHoLwlL7FNAGF';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DBZ']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [ ...cat, 'Batman']);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
