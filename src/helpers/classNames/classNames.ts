//Record-тип, который позволяет создавать типы объектов с определенными ключами и значениями
type Mods = Record<string, boolean | string>;

//функция для удобного комбинирования классов, если они используются по какому то условию
//arg: cls-главный класс, mods-объект с модами {class: bool}, additional-[доп. классы]
export function classNames(
    cls: string,
    mods: Mods,
    additional: string[]
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods) // вернет [[class1: true], [class2: false]]
            .filter(([className, value]) => Boolean(value)) // вернет [[class1: true]]
            .map(([className, value]) => className), // вернет class1
    ].join(" ");
}

//Object.entries() - дает доступ к ключам и значениям объекта [[key1: value1], [key2: value2], ...]
