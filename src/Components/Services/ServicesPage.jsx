import React, { useEffect } from 'react';
import ServicesHero from './ServicesHero';
import ServiceCategory from './ServiceCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Baby, Activity, Flower2, Stethoscope, Ribbon } from 'lucide-react';

const serviceData = [
    {
        title: "Maternity Services",
        subtitle: "Complete pregnancy and delivery care including:",
        icon: <Baby className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1559139225-4215dfc4e6a3?auto=format&fit=crop&q=80&w=1200",
        services: [
            "Normal Delivery",
            "Cesarean Section (C-Section)",
            "Painless Delivery (Epidural)",
            "High-Risk Pregnancy Management",
            "Antenatal & Postnatal Care"
        ]
    },
    {
        title: "Gynecological Surgeries",
        subtitle: "Advanced surgical treatments for women’s health conditions:",
        icon: <Activity className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1579153138225-390ae270d41d?auto=format&fit=crop&q=80&w=1200",
        services: [
            "Fibroid Removal (Myomectomy)",
            "Ovarian Cyst Removal",
            "Ectopic Pregnancy Surgery",
            "Hysterectomy (Uterus Removal)",
            "Ovarian Surgery"
        ]
    },
    {
        title: "Infertility Clinic – Diagnosis & Treatment",
        subtitle: "Comprehensive fertility evaluation and treatment services:",
        icon: <Flower2 className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1200",
        services: [
            "Advanced Hormonal Testing",
            "Follicular Study (Egg Monitoring)",
            "Diagnostic Laparoscopy",
            "Diagnostic Hysteroscopy",
            "Blocked Fallopian Tube Surgery",
            "Fertility Counseling"
        ]
    },
    {
        title: "Sonography & Diagnostic Services",
        subtitle: "Accurate imaging and diagnostic facilities:",
        icon: <Stethoscope className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        services: [
            "Pregnancy Sonography",
            "TVS (Transvaginal Sonography)",
            "3D–4D Fetal Sonography",
            "Pelvic Ultrasound"
        ]
    },
    {
        title: "Cancer Screening & Women’s Health Care",
        subtitle: "Early detection and specialized treatment services:",
        icon: <Ribbon className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200",
        services: [
            "Uterine Cancer Screening",
            "Ovarian Cancer Screening",
            "Comprehensive Cancer Surgery",
            "Preventive Health Checkups"
        ]
    }
];

export default function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <ServicesHero />
            <div className="space-y-0">
                {serviceData.map((category, index) => (
                    <ServiceCategory key={index} category={category} index={index} />
                ))}
            </div>
        </div>
    );
}
