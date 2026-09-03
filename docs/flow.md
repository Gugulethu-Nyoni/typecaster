build()
  │
  ├── normalizeEnums()
  │
  └── normalizeModels(models, enums)
        │
        ├── object → normalizeModel(..., enums)
        │
        └── Map → normalizeModelMap(..., enums)
                              │
                              └── normalizeModel(..., enums)
                                      │
                                      └── normalizeFields(..., enums)
                                              │
                                              ├── object → normalizeField(..., enums)
                                              │
                                              └── Map → normalizeFieldMap(..., enums)
                                                                  │
                                                                  └── normalizeField(..., enums)
                                                                        │
                                                                        └── enumValues