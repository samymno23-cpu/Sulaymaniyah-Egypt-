// 1. مصفوفة البيانات (المستودع)
const oliveProducts = [
    {
        name: "زيتون تفاحي",
        englishName: "Taffahi Olives",
        description: "ملك المائدة المصرية، يتميز بحجمه الكبير المستدير وقشرته الرقيقة ولحمه الوافر. مثالي للطعم الغني والقوام الزبدي.",
        features: ["حجم كبير", "قشرة رقيقة", "طعم دسم"]
    },
    {
        name: "زيتون عزيزي",
        englishName: "Azizi Olives",
        description: "صنف مصري أصيل، يشتهر بقدرته العالية على التحمل؛ لذا فهو صديق التخزين طويل الأمد وطعم لاذع ومميز.",
        features: ["قوام صلب", "تخزين طويل", "مقرمش"]
    },
    {
        name: "زيتون بيكوال",
        englishName: "Picual Olives",
        description: "من أهم الأصناف العالمية، يتميز بشكل بيضاوي. يشتهر بمحتواه العالي من الزيوت الصحية وقوام صلب بعد التخليل.",
        features: ["نكهة قوية", "محتوى زيت عالي", "متزن"]
    },
    {
        name: "زيتون منزانيلو",
        englishName: "Manzanilla Olives",
        description: "الصنف المفضل عالمياً للحشو والإخلاء لسهولة فصل النواة. يتميز بمذاقه الناعم وقوامه الرقيق المناسب للفنادق.",
        features: ["سهل الإخلاء", "مثالي للحشو", "كروي متناسق"]
    },
    {
        name: "زيتون كلاماتا",
        englishName: "Kalamata Olives",
        description: "من أرقى الأنواع عالمياً، يتميز بلونه الأرجواني الداكن الطبيعي وشكله اللوزي، وتقديم توازن مثالي بين الملوحة والحموضة.",
        features: ["لون طبيعي", "شكل لوزي", "جودة فاخرة"]
    },
    {
        name: "زيتون دولسي",
        englishName: "Dolci Olives",
        description: "يتميز بحلاوة خفيفة في طعمه وقوام متماسك. غني بالزيوت الطبيعية، ويُعد من أفضل الأصناف لإنتاج الزيتون الأسود.",
        features: ["طعم مائل للحلاوة", "زيتون أسود", "لحم متماسك"]
    }
];

// 2. دالة العرض (المحرك)
const displayProducts = () => {
    const container = document.getElementById('product-container');
    if (!container) {
        console.error("خطأ: لم يتم العثور على عنصر product-container في صفحة HTML");
        return;
    }

    // تنظيف الحاوية قبل العرض
    container.innerHTML = "";

    // بناء الكروت
    oliveProducts.forEach(product => {
        container.innerHTML += `
            <div style="background: #fff; border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-right: 6px solid #27ae60; direction: rtl; font-family: sans-serif;">
                <h3 style="color: #27ae60; margin: 0 0 10px 0; display: flex; align-items: center; justify-content: space-between;">
                    ${product.name}
                    <span style="color: #bdc3c7; font-size: 14px; font-weight: normal;">${product.englishName}</span>
                </h3>
                <p style="color: #34495e; line-height: 1.7; margin-bottom: 15px;">${product.description}</p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    ${product.features.map(f => `
                        <span style="background: #e8f5e9; color: #2e7d32; padding: 5px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;">
                            ${f}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    });
};

// 3. تشغيل الكود بمجرد تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayProducts);
} else {
    displayProducts();
}
