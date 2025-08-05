package com.smarthealth.advisor.service;

import com.smarthealth.advisor.model.HealthForm;
import org.springframework.stereotype.Service;

@Service
public class HealthService {
    public String analyze(HealthForm form) {
        double heightInMeters = form.getHeight() / 100.0;
        double bmi = form.getWeight() / (heightInMeters * heightInMeters);

        if (bmi < 18.5)
            return "Underweight - Consider improving your nutrition.";
        else if (bmi < 24.9)
            return "Normal weight - Keep up the good work!";
        else if (bmi < 29.9)
            return "Overweight - Try to incorporate exercise into your routine.";
        else
            return "Obese - Please consider consulting a health professional.";
    }
}