const li_list = document.getElementsByTagName("li");
console.log(li_list.length);

var li_element;
let array = [];

let li_element_object = {
    'content' : li_element,
    'count' : 0
};

function count_child(li_element) {
    if (li_element.children.length === 0) {
        return 0;
    }
    var result = li_element.children[0].children.length;
    var child;
    for (child of li_element.children[0].children) {
        result += count_child(child)
    }
    return result;
}

for (li_element of li_list) {
    console.log(count_child(li_element));
}

// for (li_element of li_list) {
//     li_element_object =  Object.create(li_element_object);
//     li_element_object.content = li_element;
//     if (li_element.children.length != 0) {
//         li_element_object.count = li_element.children[0].children.length;
//     }
//     else {
//         li_element_object.count = 0;
//     }
//     console.log(li_element_object.count);
//     array.push(li_element_object);
// }

// for (li_element_object of array) {
//     if (li_element_object.content.children.length != 0) {
//         var child;
//         for (child of li_element_object.content.children[0].children) {
//             var child_object;
//             for (child_object of array) {
//                 if (child_object.content === child) {
//                     li_element_object.count += child_object.count;
//                 }
//             }
//         }
//     }
// }

for (li_element of li_list) {
    if (count_child(li_element) !== 0) {
        li_element.firstChild.nodeValue += ' (' + count_child(li_element) + ')';
    }
}
