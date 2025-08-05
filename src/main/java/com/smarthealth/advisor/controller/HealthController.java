package com.smarthealth.advisor.controller;

import com.smarthealth.advisor.model.HealthForm;
import com.smarthealth.advisor.service.HealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class HealthController {

    @Autowired
    private HealthService healthService;

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("form", new HealthForm());
        return "index";
    }

    @PostMapping("/analyze")
    public String analyzeHealth(@ModelAttribute HealthForm form, Model model) {
        String result = healthService.analyze(form);
        model.addAttribute("result", result);
        return "result";
    }
}