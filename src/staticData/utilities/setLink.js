import queryString from "query-string";
export const setLinkUrl = (pathname, search, newFilter) => {
  let newSearch = "",
    exist = false;
  newFilter = Object.entries(newFilter)[0];
  const entireSearch = queryString.parse(search);
  if (search) {
    // exist search
    Object.keys(entireSearch).map(search => {
      if (search === newFilter[0]) exist = true;
      return null;
    });
  }
  if (exist) {
    entireSearch[newFilter[0]] = newFilter[1];
    return pathname + makeurl(entireSearch);
  }
  if (!search) {
    newSearch = `?${newFilter[0]}=${newFilter[1]}`;
  } else {
    newSearch = `${search}&${newFilter[0]}=${newFilter[1]}`;
  }
  return `${pathname}${newSearch}`;
};
function makeurl(obj) {
  var s = "";
  for (var key in obj) {
    if (s != "") {
      s += "&";
    } else {
      s += "?";
    }
    s += `${key}=${obj[key]}`;
  }
  return s;
}

export const setLink = data => {
  // const { categories } = data;
  // if (categories && Array.isArray(categories)) {
  //   let url = categories.reduce((total, category, index) => {
  //     console.log(total);
  //     if (category.category) return `${total}/${category.category}`;
  //     else return `${total}/${category.product}`;
  //   }, "/details");
  //   return url;
  // } else {
  //   return "/";
  // }
  const { categories } = data;
  if (categories && Array.isArray(categories)) {
    let url = categories.reduce((total, category, index) => {
      if (category.product) return `${total}/${category.product}`;
      else return `${total}`;
    }, "/details");
    return url;
  } else {
    return "/notFounding";
  }
};
