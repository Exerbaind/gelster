let articles = document.querySelectorAll('.article-item');
let articlePodkatalog = document.querySelectorAll('.articles-podkatalog-name');
let articlePodkatalogThin = document.querySelectorAll('.thicknes-changer__btn');


let arrayForThin = [];
articles.forEach((article, index) => {
    arrayForThin.push(articles[index]);
});

document.querySelector('.articles-podkatalog-name.all').addEventListener('click', function () {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    this.classList.add('chosen-article');
    articles.forEach((article, index) => {
        articles[index].classList.remove('hide-article');
        arrayForThin.push(articles[index]);
    });
    articles.forEach((article, index) => {
        if (index < 5) {
            articles[index].classList.remove('hide-article');
        } else {
            articles[index].classList.add('hide-article');
        }
    });
    document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
});

function green() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.green').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.green');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function grey() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.grey').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.grey');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function orange() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.orange').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.orange');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function brown() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.brown').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.brown');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function yellow() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.yellow').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.yellow');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function black() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.black').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.black');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function white() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.white').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.white');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function red() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.red').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.red');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function blue() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.blue').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.blue');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function beige() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.beige').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.beige');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function purple() {
    arrayForThin = [];
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    articlePodkatalog.forEach((article, index) => {
        articlePodkatalog[index].classList.remove('chosen-article');
    })
    document.querySelector('.articles-podkatalog-name.purple').classList.add('chosen-article');

    let articlesOne = document.querySelectorAll('.article-item.purple');
    articles.forEach((article, index) => {
        articles[index].classList.add('hide-article');
    });
    for (let i = 0; i < 5; i++) {
        articlesOne.forEach((article, index) => {
            articlesOne[index].classList.remove('hide');
            articlesOne[index].classList.remove('hide-article');
            arrayForThin.push(articlesOne[index]);
        });
    };
    if (articlesOne.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

// Фильтрация по толщине

document.querySelector('.thicknes-changer__btn.all').addEventListener('click', function () {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    });
    document.querySelector('.thicknes-changer__btn.all').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        arrayForThin[index].classList.remove('hide-article');
    })
    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
});

function two() {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    })
    document.querySelector('.thicknes-changer__btn.two').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        if (arrayForThin[index].classList.contains('two')) {
            arrayForThin[index].classList.remove('hide-article');
        } else {
            arrayForThin[index].classList.add('hide-article')
        }
    })

    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function twoHalf() {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    })
    document.querySelector('.thicknes-changer__btn.two-half').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        if (arrayForThin[index].classList.contains('two-half')) {
            arrayForThin[index].classList.remove('hide-article');
        } else {
            arrayForThin[index].classList.add('hide-article');
        }
    })

    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function threeTwo() {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    })
    document.querySelector('.thicknes-changer__btn.three-two').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        if (arrayForThin[index].classList.contains('three-two')) {
            arrayForThin[index].classList.remove('hide-article');
        } else {
            arrayForThin[index].classList.add('hide-article');
        }
    })

    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function threeHalf() {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    })
    document.querySelector('.thicknes-changer__btn.three-half').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        if (arrayForThin[index].classList.contains('three-half')) {
            arrayForThin[index].classList.remove('hide-article');
        } else {
            arrayForThin[index].classList.add('hide-article');
        }
    })

    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};

function four() {
    articlePodkatalogThin.forEach((article, index) => {
        articlePodkatalogThin[index].classList.remove('chosen-thick');
    })
    document.querySelector('.thicknes-changer__btn.four').classList.add('chosen-thick');
    arrayForThin.forEach((article, index) => {
        if (arrayForThin[index].classList.contains('four')) {
            arrayForThin[index].classList.remove('hide-article');
        } else {
            arrayForThin[index].classList.add('hide-article');
        }
    })

    if (arrayForThin.length > 0) {
        document.querySelector('.see-all-collections').classList.add('hide-more-article');
    } else {
        document.querySelector('.see-all-collections').classList.remove('hide-more-article');
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
        "развернуть коллекцию";
};