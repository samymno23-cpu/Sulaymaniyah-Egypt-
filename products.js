// ملف بيانات المنتجات - شركة السليمانية
const oliveProducts = [
    {
        id: 1,
        name: "زيتون تفاحي",
        englishName: "Taffahi Olives",
        description: "ملك المائدة المصرية، يتميز بحجمه الكبير المستدير وقشرته الرقيقة ولحمه الوافر. مثالي للطعم الغني والقوام الزبدي.",
        features: ["حجم كبير", "قشرة رقيقة", "طعم دسم"],
        image: "images/taffahi.jpg"
    },
    {
        id: 2,
        name: "زيتون عزيزي",
        englishName: "Azizi Olives",
        description: "صنف مصري أصيل، يشتهر بقدرته العالية على التحمل؛ لذا فهو صديق التخزين طويل الأمد وطعم لاذع ومميز.",
        features: ["قوام صلب", "تخزين طويل", "مقرمش"],
        image: "images/azizi.jpg"
    },
    {
        id: 3,
        name: "زيتون بيكوال",
        englishName: "Picual Olives",
        description: "من أهم الأصناف العالمية، يتميز بشكل بيضاوي. يشتهر بمحتواه العالي من الزيوت الصحية وقوام صلب بعد التخليل.",
        features: ["نكهة قوية", "محتوى زيت عالي", "متزن"],
        image: "images/picual.jpg"
    },
    {
        id: 4,
        name: "زيتون منزانيلو",
        englishName: "Manzanilla Olives",
        description: "الصنف المفضل عالمياً للحشو والإخلاء لسهولة فصل النواة. يتميز بمذاقه الناعم وقوامه الرقيق المناسب للفنادق.",
        features: ["سهل الإخلاء", "مثالي للحشو", "كروي متناسق"],
        image: "images/manzanilla.jpg"
    },
    {
        id: 5,
        name: "زيتون كلاماتا",
        englishName: "Kalamata Olives",
        description: "من أرقى الأنواع عالمياً، يتميز بلونه الأرجواني الداكن الطبيعي وشكله اللوزي، وتقديم توازن مثالي بين الملوحة والحموضة.",
        features: ["لون طبيعي", "شكل لوزي", "جودة فاخرة"],
        image: "images/kalamata.jpg"
    },
    {
        id: 6,
        name: "زيتون دولسي",
        englishName: "Dolci Olives",
        description: "يتميز بحلاوة خفيفة في طعمه وقوام متماسك. غني بالزيوت الطبيعية، ويُعد من أفضل الأصناف لإنتاج الزيتون الأسود.",
        features: ["طعم مائل للحلاوة", "زيتون أسود", "لحم متماسك"],
        image: "images/dolci.jpg"
    }
];

// تصدير البيانات لاستخدامها في الموقع
export default oliveProducts;
