import { Request, Response } from 'express';

import { Pets } from '../models/Pets';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pets.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pets.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pets.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pets.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};